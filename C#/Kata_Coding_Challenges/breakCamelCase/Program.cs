using System;
using System.Collections.Generic;


namespace breakCamel
{

//Complete the solution so that the function will break up camel casing, using a space between words.
//Example
//solution("camelCasing")  ==  "camel Casing"
    class Program
    {
        static string Solution(string input)
        {
            List<char> charList = new List<char>();

            foreach(char letter in input)
            {
                if( letter == char.ToUpper(letter))
                {
                    charList.Add(' ');
                    charList.Add(letter); 
                } 
                else
                {
                    charList.Add(letter); 
                }
            }

            return new string(charList.ToArray()); 
        }
        static void Main(string[] args)
        {
            Console.WriteLine(Solution("camelCaseCatAndDog")); 
            Console.WriteLine("Hello World!");
        }
    }
}
