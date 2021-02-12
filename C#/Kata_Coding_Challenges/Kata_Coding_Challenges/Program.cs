using System;

namespace Kata_Coding_Challenges
{
    //class Program
    //{

    //    static void Main(string[] args)
    //    {
    //        Console.WriteLine("Hello World!");
    //    }
    //}

     public class Kata
    {
        public static int[] PreFizz(int n)
        {
            int start = 1;
            int[] array = new int[n];
            for (int i = 0; i < n; i++)
            {
                array[i] = start;
                start++;
            }
            return array;
        }

        static void Main(string[] args)
        {
            Console.WriteLine(PreFizz(10));
        }
    }
}

