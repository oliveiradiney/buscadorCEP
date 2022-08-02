import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    margin-top: 10px;
`;

export const PageContent = styled.View`
    align-items: center;
`;

export const PageTitle = styled.Text`
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: bold;
`;

export const InputText = styled.TextInput`
    background-color: #fff;
    border-width: 1px;
    border-color: #ddd;
    border-radius: 5px;
    width: 90%;

    padding: 12px;

    font-size: 18px;
`;

export const ButtonContainer = styled.View`
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
    height: 50px;
    width: 25%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #12A454;
    
`;

export const ButtonClear = styled.TouchableOpacity`
    height: 50px;
    width: 25%;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    background-color: #E83F5B;
    
`;



export const ButtonText = styled.Text`
    font-size: 22px;
    color: #F0F3F5;
    font-weight: 700;
`;

export const AreaCep = styled.View`
   
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 400px;
    
    border-color: #ccc;
    border-width: 1px;
    border-radius: 30px;

`

export const ItemText = styled.Text`
    font-size:22px;
    color: #000;
    font-weight: 600;
` 

export const ContainerCep = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;

    
`