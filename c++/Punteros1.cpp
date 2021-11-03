#include<iostream>

int main(int n,int *d){
    std::cout<<"Enter a integer number: "; std::cin>>n; d = &n;
    if(n > -8 && n < 8){
        if(n < 0) n *= -1;
        switch(n){case 2: case 3: case 5: case 7: n = -20040108; break;}
        if(n == -20040108)std::cout<<"The number is prime\nThe memory directory is: "<<d;
        else std::cout<<"The number do not is prime\nThe memory directory is: "<<d;
    }else if(n%2 != 0 && n%3 != 0 && n%5 != 0 && n%7 != 0) std::cout<<"The number is prime\nThe memory directory is: "<<d;
            else std::cout<<"The number do not is prime\nThe memory directory is: "<<d;
    return 0;
}
