using System;


//You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

//likes[] --must be "no one likes this"
//likes["Peter"]-- must be "Peter likes this"
//likes ["Jacob", "Alex"] --must be "Jacob and Alex like this"
//likes["Max", "John", "Mark"]-- must be "Max, John and Mark like this"
//likes ["Alex", "Jacob", "Mark", "Max"] --must be "Alex, Jacob and 2 others like this"
namespace Facebook_Likes
{
    class Program
    {

        static string Likes(string[] names)
        {

             switch(names.Length)
            {
                case 0:
                    return "no one likes this"; 
                case 1 : 
                    return $"{names[0]} likes this";
                case 2:
                    return $"{names[0]} and {names[1]} like this";
                case 3: 
                    return $"{names[0]}, {names[1]} and {names[2]} like this ";
                default: 
                    return $"{names[0]}, {names[1]} and {names.Length -2} others like this";
            }
        }
        static void Main(string[] args)
        {
            string[] names = { "Alex", "Jacob", "Mark", "Max" }; 
            Console.WriteLine(Likes(names));
        }
    }
}
