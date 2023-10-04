import React from "react";

import { HighlightCard } from "../../components/HighlightCard/HighlightCard";
import {
   TransactionCard,
   TransactionCardProps,
} from "../../components/TransactionCard/TransactionCard";

import {
   Container,
   Header,
   UserWrapper,
   UserInfo,
   Photo,
   User,
   UserGreeting,
   UserName,
   Icon,
   HighlightCards,
   Transactions,
   Title,
   TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
   id: string;
}

export function Dashboard() {
   const date: DataListProps[] = [
      {
         id: "1",
         type: "positive",
         title: "Desenvolvimento de site",
         amount: "R$ 12.000,00",
         category: {
            name: "Vendas",
            icon: "dollar-sign",
         },
         date: "04/10/2023",
      },
      {
         id: "2",
         type: "negative",
         title: "Hamburgueria Pizzy",
         amount: "R$ 59,00",
         category: {
            name: "Alimentacão",
            icon: "coffee",
         },
         date: "06/10/2023",
      },
      {
         id: "3",
         type: "negative",
         title: "Aluguel do apartamento",
         amount: "R$ 1.200,00",
         category: {
            name: "Casa",
            icon: "shopping-bag",
         },
         date: "16/10/2023",
      },
   ];

   return (
      <Container>
         <Header>
            <UserWrapper>
               <UserInfo>
                  <Photo
                     source={{
                        uri: "https://avatars.githubusercontent.com/u/92237773?v=4",
                     }}
                  />
                  <User>
                     <UserGreeting>Olá, </UserGreeting>
                     <UserName>Sergio</UserName>
                  </User>
               </UserInfo>
               <Icon name="power" />
            </UserWrapper>
         </Header>

         <HighlightCards>
            <HighlightCard
               type="up"
               title="Entradas"
               amount="R$ 17.400,00"
               lastTransaction="Última entrada dia 01 de outubro"
            />

            <HighlightCard
               type="down"
               title="Saídas"
               amount="R$ 1.259,00"
               lastTransaction="Última saídas dia 02 de outubro"
            />
            <HighlightCard
               type="total"
               title="Total"
               amount="R$ 16.141,00"
               lastTransaction="01 á 16 de outubro"
            />
         </HighlightCards>

         <Transactions>
            <Title>Listagem</Title>

            <TransactionsList
               data={date}
               keyExtractor={(item) => item.id}
               renderItem={({ item }) => <TransactionCard data={item} />}
            />
         </Transactions>
      </Container>
   );
}
