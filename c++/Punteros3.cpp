#include<iostream> #include<stdlib.h>
void llenar(int *,int); int buscar(int *,int, int);

int main(int p, int *a, int b){
    std::cout<<"Number of positions: "; std::cin>>p; a = new int[p]; llenar(a,p);
    std::cout<<"\nsearch number: ";std::cin>>b;std::cout<<"\n found number in: "<<buscar(a,p,b)<<std::endl;
    return 0;
}

void llenar(int *a, int p){for(int i = 0; i < p; i++){std::cout<<"\nDate of the position "<<i<<": "; std::cin>>a[i];}}

int buscar(int *a, int p, int b){int *r, i; for(i = 0; i < p; i++){if(a[i] == b) return i;} return -1;}
