using System;
using System.Collections.Generic;


//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"
namespace Reverse_Words
{
    class Program
    {

        static string Reverse_Words(string word_input)
        {
            List<char> Reversed = new List<char>();
            List<char> thisWordReversed = new List<char>();
            int start = 0; 

            while (start <= word_input.Length - 1)
            {
                char thisChar = word_input[start];

                if (thisChar == ' ')
                {   
                    thisWordReversed.Reverse();
                    thisWordReversed.Add(thisChar);
                    Reversed.AddRange(thisWordReversed);
                    thisWordReversed.Clear();
                }
                else
                {
                    thisWordReversed.Add(thisChar);
                }

                start++; 
            }

            thisWordReversed.Reverse();
            Reversed.AddRange(thisWordReversed);
            thisWordReversed.Clear();

            return new string(Reversed.ToArray());  
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Reverse_Words("elbuod  secaps"));
        }
    }
}
