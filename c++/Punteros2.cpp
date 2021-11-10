#include<iostream>

int main(int p, int *d, int a, int *b){
    std::cout<<"Positions number: "; std::cin>>p; int n[p]; d = n;
    for(int i = 0; i < p; i++){
        std::cout<<"\nValor of position "<<i<<": "; std::cin>>n[i];
        if(i == 0){a = *d; b = d;}else if(a > *d){a = *d; b = d;} d++;}
    std::cout<<"\nThe smallest number is: "<<a<<" in the position: "<<b<<std::endl;

    return 0;
}
