import React from "react";

interface Props {
    data: Data[]; 
    buttonBackgroundColor?: string; 
    dotBackgroundColor?: string;
    onFinish?: () => void; 
    buttonIconColor?: string;
}

export interface Data {
    _id: string;
    title: string;
    description: string;
    image:React.ReactElement;
}

export default class Onboarding extends React.Component<Props> {
    render(): JSX.Element;
}