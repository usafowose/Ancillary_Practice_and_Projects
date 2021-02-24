using System;
using System.Collections.Generic;

//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//Examples
//"the-stealth-warrior" gets converted to "theStealthWarrior"
//"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
//"the-stealth-warr_ior" gets converted to "theStealthWarrIor"
//qrnnksavkb_Fdeceebiif-Piqkiujhaw

namespace stringToCamelOrPascal
{
    class Program
    {
        static string CamelOrPascal(string input)
        {
            string statement = "";
            string[] splitString = input.Split('-');

            List<string> stringList = new List<string>();
            int counter = 0; 

            foreach (string str in splitString)
            {
                if (str.Contains('_'))
                {
                    counter++;
                    string[] splitAgain = str.Split('_');
                    stringList.AddRange(splitAgain);
                }
            }

            stringList.Add(splitString[counter]);
            splitString = stringList.ToArray(); 


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
            Console.WriteLine(CamelOrPascal("the-stealth-warrior"));
        }
    }
}
