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
            List<string> splitAgain = new List<string>(); 
            int counter1 = 0;
            int counter2 = 0; 

            foreach (string str in splitString)
            {
                if (str.Contains('_'))
                {
                    string[] moveToSplitAgain = str.Split('_');
                    splitAgain.AddRange(moveToSplitAgain);
                }
                counter1++; 
     
            }

            //use for loop here 
            //compare counter1 value from prev loop to i each time. 
            //when i equals counter1 -1 val
                // add splitAgain to stringList, then continue on with loop
            while (counter2 < splitString.Length)
            {
                if (counter2 == counter1 -1 && counter2 < splitString.Length)
                {
                    stringList.AddRange(splitAgain);
                    counter2++;
                } else if (counter2 == counter1 -1)
                {
                    stringList.AddRange(splitAgain);
                    break;
                }
                stringList.Add(splitString[counter2]);
                counter2++; 
            }
            
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
