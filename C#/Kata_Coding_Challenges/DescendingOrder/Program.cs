using System;
using System.Collections.Generic;
using System.Linq;

namespace DescendingOrder
{
    class Program
    {

        // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

        // Examples:
        // Input: 42145 Output: 54421
        public static int Descending(int number)
        {
            List<int> NumList = new List<int>();
            string numStr = number.ToString();

            foreach (char digStr in numStr)
            {
                NumList.Add(int.Parse(digStr.ToString()));
            }

            NumList.Sort();
            NumList.Reverse();

            int result = 0;
            int[] numArr = NumList.ToArray();

            foreach (int num in numArr)
            {
                result = (result * 10) + num; 
            }

            return result;

           

        }
        static void Main(string[] args)
        {
            Console.WriteLine(Descending(45125)); 
        }
    }
}
