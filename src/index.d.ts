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
    image:Element<T>;
}

export default class Onboarding extends React.Component<Props> {
    render(): JSX.Element;
}