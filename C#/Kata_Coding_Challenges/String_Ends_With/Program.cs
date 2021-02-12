using System;

namespace String_Ends_With
{
    class Program
    {
        public static bool EndsWith(string str, string ending) => str.EndsWith(ending);
        static void Main(string[] args)
        {
            Console.WriteLine(EndsWith("Johnny Dang", "ang"));
        }
    }
}
