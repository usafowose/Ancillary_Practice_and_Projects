using System;

namespace GetSum
{
    class Program
    {

        public static int GetSum(int num1, int num2)
        {
            Random dice = new Random();
            
            int sum = 0;
            int least = Math.Min(num1, num2), greatest = Math.Max(num1, num2);
            do
            {
                sum += least;
                least++;
            } while (least <= greatest);
            return sum; 
        }
        static void Main(string[] args)
        {
            Console.WriteLine(GetSum(3, -1));
        }
    }
}
