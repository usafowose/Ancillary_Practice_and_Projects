using System;
using System.Collections.Generic; 

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//Examples
//"the-stealth-warr_ior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

namespace stringToCamelOrPascal
{
    class Program
    {
        static string CamelOrPascal(string input)
        {
            string statement = "";
            string[] splitString = input.Split('-');

            List<Array> stringList = new List<Array>(); 
            for(int i =0; i<splitString.Length; i++)
            {
            if (string.Join("", splitString).Contains('_'))
                        {
                 
                        }
            }
            


                if (input[0] == char.ToUpper(input[0]))
                {
                    for (int i = 0; i < splitString.Length; i++)
                    {
                        splitString[i] = char.ToUpper(splitString[i][0]) + splitString[i].Substring(1); 
                    }
                    statement = string.Join("", splitString);
                } 
                else
                {
                    for (int i = 1; i < splitString.Length; i++)
                    {
                        splitString[i] = char.ToUpper(splitString[i][0]) + splitString[i].Substring(1);
                    }
                    statement = string.Join("", splitString); 
                }

            return statement;
        }
           

        static void Main(string[] args)
        {
            Console.WriteLine(CamelOrPascal("qrnnksavkb_Fdeceebiif-Piqkiujhaw"));
        }
    }
}
