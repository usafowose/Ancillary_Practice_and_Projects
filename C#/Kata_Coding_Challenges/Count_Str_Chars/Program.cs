using System;
using System.Collections.Generic; 
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//What if the string is empty ? Then the result should be empty object literal, {}.

namespace Count_Str_Chars
{
    class Program
    {
        static Dictionary<char, int> Count(string inputStr)
        {
            Dictionary<char, int> Tally = new Dictionary<char, int>();
            if (string.IsNullOrEmpty(inputStr))
            {
                return Tally; 
            }

            foreach(char letter in inputStr)
            {
                if (Tally.ContainsKey(letter)) {
                    Tally[letter]++; 
                } 
                else
                {
                    Tally.Add(letter, 1);
                }
            }
            return Tally; 
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Count("dictionary"));
        }
    }
}
