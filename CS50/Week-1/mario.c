#include <stdio.h>

int main(void)
{
  int length = 5;
  for (int i = 0; i < length; i++)
  {
    for (int j = 0; j < length; j++)
    {
      printf("#");
    }
    printf("\n");
  }
}