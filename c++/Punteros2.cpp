#include<iostream>

int main(int p, int *d){
    std::cout<<"Positions number: ";
    std::cin>>p;
    int n[p];
    d = n;
    for(int i = 0; i == n.size(); i++){
        std::cout<<"\nValor of position: "<<i;
        std::cin>>n[i];
        if(p < *d){
            p = n[i];
        }
        d++;
    }
    std::cout<<p;

    return 0;
}
