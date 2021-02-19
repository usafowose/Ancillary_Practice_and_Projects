using System;
using System.Collections.Generic;

namespace C_
{
  class Program
  {
    
    static void NotMain1(string[] args)
    {
            Console.WriteLine($"These are the arguments: {args[0]} {args[1]} \n \n "); 
      string name = "Queen";

      string[] people = { "Queen", "Andrew", "Mom" };
      int[] nums = { 4, 5, 6 };

      Console.WriteLine($"{name}");
      Console.WriteLine($"My Girfriends Name Is {name} and her name is {name.Length} letters long");
      Console.WriteLine($"{nums}");
      Console.WriteLine("Hello World!");
      Console.WriteLine(people[1]);
      Console.WriteLine($"{people[0]}");
    }

    static void CallAllMembers()
        {
            string[] args = { "Andrew", "Queen" }; 
            NotMain1(args);
            StringFormatting();
            Console.WriteLine("=======================================");
            CheckForNull("        j ");
            Console.WriteLine("=======================================");
            FindAll("pneumonoultramicroscopicsilicovolcanoconiosis", 'x').ForEach(Console.WriteLine); 
        }
    

    static void StringFormatting()
        {
            //Character Escape Sequences
            //__________________________
            //|____________|___________|
            //|______\n____|   newLine |
            //|______\t____|    tab    |    
            //|______\u____|  unicode  |
            //|____________|___________|

            Console.WriteLine("New Line After This \n\n  \t Why I Am So Far Away?\t Whatever! \n\tDoes Anyone Speak Japanese? \u3053\u3093 ");
            //---------------------------------------------------------------------------------------
            //Verbatim String Literal
            //Initiated with @ before open quotes
            Console.WriteLine(@"           The space is intentional
                                 As is this belly string :) Everything is escaped (literally)
                                            /\/\/\/\/\/\/\/\/\/\/\ EVERYTHING");

            string dirName = "HW11-Bamazon";
            string path = $@"C:\Users\Owner\Class\Homework-Assignments\{dirName}\README.md";
            Console.WriteLine(path);

            //----------------------------------GENERAL PRACTICE--------------------------------------
            string projectName = "ACME";
            string russianMessage = "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0440\u0443\u0441\u0441\u043a\u0438\u0439 \u0432\u044b\u0432\u043e\u0434"; 


            /*
             * Expected Output: 
             * ---------------------
             * View English output:
             *     c:\Exercise\ACME\data.txt
             * Посмотреть русский вывод:
             *     c:\Exercise\ACME\ru-RU\data.txt
            */
            Console.WriteLine($"View English Output\n\tc:\\Exercise\\{projectName}\\data.txt");
            Console.WriteLine($"{russianMessage}\n\tc:\\Exercise\\{projectName}\\ru-RU\\data.txt");

            //----------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------
        }

    static void CheckForNull(string input)
        {
            Console.WriteLine(String.IsNullOrWhiteSpace(input) ? "The string is not valid" : "This is a valid string");
            
        }

        /// <summary>
        /// Returns a list of all occurences that a search char occurs in a given string 
        /// </summary>
        /// <param name="inputString">The string against which the search is being made</param>
        /// <param name="searchChar">The char for whose occurences we are searching against the input string</param>
        /// <returns>List<int></returns>
    static List<int> FindAll(string inputString, char searchChar)
        {
            List<int> allOccurences = new List<int>();

            int i = 0;
            while (i<inputString.Length)
            {
                int whereItIs = inputString.IndexOf(searchChar, i+1);
                i = whereItIs == -1 ? inputString.Length : whereItIs;
                if (whereItIs == -1 && allOccurences.Count == 0)
                {
                    allOccurences.Add(whereItIs);
                    break; 
                } else if (whereItIs == -1)
                {
                    break; 
                }
                allOccurences.Add(whereItIs); 
            }

            return allOccurences;
        }
    static void Main(string[] args)
    {
            CallAllMembers(); 

      // PLAYING AROUND WITH STRINGS AND THEIR METHODS
      string name = "Queen";
      string statement = $"Queen is a professional that likes dogs";

      bool validate = statement.Contains(name);
      bool checkStart = statement.StartsWith("Quee");
      bool checkEnd = statement.EndsWith("dogs");

      int index = statement.IndexOf("professional");
      string newStatement = statement.Replace("professional", "baddie").Replace("dogs", "cats");
      string newStatementEmphasized = newStatement.Replace(name, name.ToUpper());


      Console.WriteLine($"{checkStart} {checkEnd}");
      Console.WriteLine($"Is the Word {name} in the Statement? {validate} \nThe Word \"Professional\" is found at Index {index} ");
      Console.WriteLine("-----------------------");
      Console.WriteLine($"Old Statement: {statement}");
      Console.WriteLine($"New Statement: {newStatement}");
      Console.WriteLine($"Emphasized Statement: {newStatementEmphasized}");

      Console.WriteLine(("I am Hungry").Split(' ')[0]);


      var Queen = (firstName: "Queen", lastName: "Davison", age: 22, favFood: "Papa Johns");
      Console.WriteLine($"First Name: {Queen.firstName} \nSurname: {Queen.lastName}\nAge: {Queen.age} \nFavFood: {Queen.favFood}");
    }
  }

}
