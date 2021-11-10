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
            //using (var conn = new MySqlConnection(System.Configuration.ConfigurationManager.ConnectionStrings["mysql"].ConnectionString))
            //{
            //    conn.Open();
            //    //comment是表名,quantity是字段名  
            //    MySqlDataAdapter mysda = new MySqlDataAdapter("select * from cmf_user", conn);
            //    DataSet ds = new DataSet();
            //    mysda.Fill(ds, "wx_weixin_users");


            //    conn.Close();
            //}

            var list = GetErGouTimeInfos();



        }

        private static Dictionary<string, string> xzdic = new Dictionary<string, string>
        {
        #region 数据
            {"aries","白羊座"},{"taurus","金牛座"},{"gemini","双子座"},{"cancer","巨蟹座"},
            {"leo","狮子座"},{"virgo","处女座"},{"libra","天秤座"},{"scorpio","天蝎座"},
            {"sagittarius","射手座"},{"capricorn","摩羯座"},{"aquarius","水瓶座"},{"pisces","双鱼座"}
        #endregion
        };


        private static List<Dictionary<string, string>> GetErGouTimeInfos()
        {
            foreach (var dic in xzdic)
            {
                for (var i = 0; i < 5; i++)
                {
                    var post = "constellation=" + dic.Key + "&tab=" + i + "&token=724109116fcb9c928f166c6f907376fe";
                    var key = post + "&key=22b802831946772d4907171839f1ed77";
                    var sign = ChinaBM.Common.EncryptKit.ToLowerMd5(key);

                    var str = HttpKit.HttpPostSubmit(post + "&sign=" + sign, "https://song.m2gou.com/xz/getData");

                    var json = str.JsonToDictionary();
                    var data = json["data"] as Dictionary<string, object>;
                }
            }

            return null;
        }
    }
}
