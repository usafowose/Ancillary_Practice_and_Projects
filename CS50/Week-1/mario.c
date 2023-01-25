#include <stdio.h>

int main(void)
{
  // printf("????\n");
  for (int i = 0; i < 3; i++)
  {
    printf("#\n");
  }
  // printf("\n");

  // print 3 by 3 grid

  const int length = 5;
  for (int i = 0; i < length; i++)
  {
    for (int j = 0; j < length; j++)
    {
      printf("#");
    }
    printf("\n");
  }
}