import React from "react";

import { HighlightCard } from "../../components/HighlightCard/HighlightCard";

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
} from "./styles";

export function Dashboard() {
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
      </Container>
   );
}
