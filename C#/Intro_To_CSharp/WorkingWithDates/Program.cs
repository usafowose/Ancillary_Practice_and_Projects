using System;

namespace WorkingWithDates
{
    class Program
    {
        static void Main(string[] args)
        {
            DateTime dateTime = new DateTime(2021, 2, 24);
            Console.WriteLine(dateTime);

            DateTime now = DateTime.Now;
            Console.WriteLine(now);
        }
    }
}
