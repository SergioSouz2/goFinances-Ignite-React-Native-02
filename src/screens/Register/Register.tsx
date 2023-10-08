import React, { useState } from "react";

import { Input } from "../../components/Form/Input/Input";
import { Button } from "../../components/Form/Button/Button";

import {
   Container,
   Header,
   Title,
   Form,
   Fields,
   TransactionTypes,
} from "./styles";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton/TransactionTypeButton";

export function Register() {
   const [transactionType, setTransactionType] = useState("");

   function handleTrasactionTypeSelect(type: "up" | "down") {
      // TODO:
      setTransactionType(type);
   }

   return (
      <Container>
         <Header>
            <Title>Cadastro</Title>
         </Header>
         <Form>
            <Fields>
               <Input placeholder="Nome" />
               <Input placeholder="Preco" />

               <TransactionTypes>
                  <TransactionTypeButton
                     type="up"
                     title="Income"
                     onPress={() => handleTrasactionTypeSelect("up")}
                     isActive={transactionType === "up"}
                  />
                  <TransactionTypeButton
                     type="down"
                     title="Outcome"
                     onPress={() => handleTrasactionTypeSelect("down")}
                     isActive={transactionType === "down"}
                  />
               </TransactionTypes>
            </Fields>

            <Button title="Enviar" />
         </Form>
      </Container>
   );
}
