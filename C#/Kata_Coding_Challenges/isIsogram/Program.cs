using System;

namespace isIsogram
{
     class Program
    {

         static bool IsIsogram(string str)
        {
            // Code on you crazy diamond!
            Char[] check = new Char[str.Length];
            //Console.WriteLine(check[0]); 
            for (int i = 0; i < str.Length; i++)
            {
                if (Array.IndexOf(check, Char.ToUpper(str[i])) == -1)
                {
                
                    check[i] = Char.ToUpper(str[i]);
                }
                else
                {
                    return false;
                }
            }
            return true;

        }
        static void Main()
            {
                Console.WriteLine("Hello World!");
            Console.WriteLine(IsIsogram("Dermatooglyphics"));
               
            }

    }
}