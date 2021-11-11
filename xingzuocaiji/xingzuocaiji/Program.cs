using ChinaBM.Common;
using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace xingzuocaiji
{
    class Program
    {
        static void Main(string[] args)
        {
            ErGouCrawl();



        }

        private static Dictionary<string, string> xzdic = new Dictionary<string, string>
        {
        #region 数据
            {"aries","白羊座"},{"taurus","金牛座"},{"gemini","双子座"},{"cancer","巨蟹座"},
            {"leo","狮子座"},{"virgo","处女座"},{"libra","天秤座"},{"scorpio","天蝎座"},
            {"sagittarius","射手座"},{"capricorn","摩羯座"},{"aquarius","水瓶座"},{"pisces","双鱼座"}
        #endregion
        };

        #region 每日数据抓取

        private static void ErGouCrawl()
        {
            try
            {
                Console.WriteLine("开始采集二狗:" + DateTime.Now);
                var list = GetErGouTimeInfos();
                InsertAll(list);
                Console.WriteLine("采集完成:" + DateTime.Now);
                Console.ReadKey();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                Console.WriteLine(e.StackTrace);
            }
            Console.ReadKey();
        }

        private static List<Dictionary<string, string>> GetErGouTimeInfos()
        {
            var l = new List<Dictionary<string, string>>();

            foreach (var dic in xzdic)
            {
                for (var i = 0; i < 5; i++)
                {
                    var post = "constellation=" + dic.Key + "&tab=" + i + "&token=fb8c7cee5e9befccc9ec107981557dfe";
                    var key = post + "&key=22b802831946772d4907171839f1ed77";
                    var sign = ChinaBM.Common.EncryptKit.ToLowerMd5(key);
                    string cookie = "";
                    var str = HttpKit.HttpPostSubmit(post + "&sign=" + sign, "https://song.m2gou.com/xz/getData", ref cookie
                        , useragent: "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
                        , headers: new Dictionary<string, string>
                        {
                            { "version","1.2.2"},
                            { "Referer","https://servicewechat.com/wxbb65a2946326c86e/83/page-frame.html" }
                        });

                    var json = str.JsonToDictionary();
                    var data = json["data"] as Dictionary<string, object>;


                    var detaildic = new Dictionary<string, string>();
                    detaildic.Add("name", dic.Value);
                    if (i == 0)
                    {
                        detaildic.Add("date", DateTime.Now.ToString("yyyyMMdd"));
                    }
                    else if (i == 1)
                    {
                        detaildic.Add("date", DateTime.Now.AddDays(1).ToString("yyyyMMdd"));
                    }
                    else if (i == 2)
                    {
                        detaildic.Add("date", GetMondayDate().ToString("yyyyMMdd") + "W");
                    }
                    else if (i == 3)
                    {
                        detaildic.Add("date", GetMondayDate().ToString("yyyyMM"));
                    }
                    else if (i == 4)
                    {
                        detaildic.Add("date", GetMondayDate().ToString("yyyy"));
                    }
                    detaildic.Add("ergoujsonstr", data.ToJson());
                    l.Add(detaildic);
                }
            }

            return l;
        }

        public static DateTime GetMondayDate()
        {

            DateTime dt = DateTime.Now;

            int today = (int)dt.DayOfWeek;

            if (dt.DayOfWeek.ToString() != "Sunday")//也可以使用today!=0

            {

                return dt.AddDays(1 - today).Date;

            }

            else

            {

                return dt.AddDays(-6 - today).Date;//若今天是周日，获取到的周一日期是下周一的日期，所以要减去7天

            }

        }

        public static void InsertAll(List<Dictionary<string, string>> list)
        {
            foreach (var item in list)
            {
                using (var conn = new MySqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["mysql"].ConnectionString))
                {
                    conn.Open();
                    var sql = "";

                    if (item.ContainsKey("ergoujsonstr"))
                    {
                        sql = "REPLACE INTO cmf_xingzuo_date(name,date,ergoujsonstr) VALUES (@name,@date,@ergoujsonstr)";
                    }
                    else
                    {
                        sql = "REPLACE INTO cmf_xingzuo_date(name,date,apijsonstr) VALUES (@name,@date,@apijsonstr)";
                    }

                    var cmd = new MySqlCommand(sql, conn);

                    cmd.Parameters.AddWithValue("name", item["name"]);
                    cmd.Parameters.AddWithValue("date", item["date"]);
                    if (item.ContainsKey("ergoujsonstr"))
                    {
                        cmd.Parameters.AddWithValue("ergoujsonstr", item["ergoujsonstr"]);
                    }
                    else
                    {
                        cmd.Parameters.AddWithValue("apijsonstr", item["apijsonstr"]);
                    }

                    cmd.ExecuteNonQuery();


                    conn.Close();
                }
            }
        }

        #endregion



    }
}
