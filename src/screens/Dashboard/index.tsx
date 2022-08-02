import React, { useState, useRef } from "react";
import { Keyboard } from "react-native";

import api from "../../services/api";

import { 
    Container,
    PageContent,
    PageTitle,
    InputText,
    ButtonContainer,
    Button,
    ButtonText,
    ButtonClear,
    AreaCep,
    ItemText,
    ContainerCep
} from "./styles";

export function Dashboard(){
    const [cep, setCep] = useState('')
    const inputRef = useRef(null);

    const [cepUser, setCepUser] = useState(null);

    
    async function search(){
        if(cep === ''){
            alert('Digite um CEP válido');
            setCep('');
            return;
        }
        try{
            const response = await api.get(`/${cep}/json`);
            setCepUser(response.data)
            Keyboard.dismiss();//Teclado será fechado
        }catch(error){
            console.log('ERROR: '+error);
        }

    }
    
    function clean(){
        setCep('')
        inputRef.current.focus();
        setCepUser(null);
    }



    return(
        <Container>
            <PageContent>
                <PageTitle>Digite o CEP desejado</PageTitle>
                <InputText
                    placeholder='Ex: 79003241'
                    value={cep}
                    onChangeText={setCep}
                    keyboardType="numeric"
                    ref={inputRef}
                />
            </PageContent>

            <ButtonContainer>
                <Button
                    onPress={search}
                >
                    <ButtonText>Buscar</ButtonText>
                </Button>
                <ButtonClear
                    onPress={clean}
                >
                    <ButtonText>Limpar</ButtonText>
                </ButtonClear>
            </ButtonContainer>
            
            {cepUser && 
                <ContainerCep>
                    <AreaCep>
                        <ItemText>CEP: {cepUser.cep}</ItemText>
                        <ItemText>Logradouro: {cepUser.logradouro}</ItemText>
                        <ItemText>Bairro: {cepUser.bairro}</ItemText>
                        <ItemText>Cidade: {cepUser.localidade}</ItemText>
                        <ItemText>Estado: {cepUser.uf}</ItemText>
                    </AreaCep>
                </ContainerCep>
            }
            
        </Container>
    );
}