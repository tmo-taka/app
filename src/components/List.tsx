type Props = {
    title: string,
    description: string,
    icon: 'bird' | 'dog'
}

const judgeIcon = (icon: Props["icon"]) => {
    return icon === 'bird' ? 'tori' : 'won'
}

export const List = (props: Props):JSX.Element => {
    return (
        <li>
            <div>{judgeIcon(props.icon)}</div>
            <div>
                <div>{props.title}</div>
                <div>{props.description}</div>
            </div>
        </li>
    )
}
