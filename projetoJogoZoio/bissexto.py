
from random import randint
tentativas = int(input('Quantas tentativas você quer ter?: '))
c = 0
n = randint(1,100)
while(c<=tentativas):
   escolha = int(input('Digite um numero até achar o numero que o computador pensou (de 1 a 100): \n'))
   if(n<escolha):
      print(f'Digite um numero Menor' )    
   elif(n>escolha):
         print('Digite um numero Maior')  
   elif(n==escolha):
         print('Acertou!!')
         print(f'Você precisou de {c} tentativas' )
         break
   c=c+1
print(f'O numero era {n}')