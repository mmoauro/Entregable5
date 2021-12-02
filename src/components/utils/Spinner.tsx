import React from "react";

interface Props {
    show: boolean;
}
export class Spinner extends React.Component<Props, any> {
    
    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.show && 
                    <div className="spinner-border" role="status" style={{color: "#D42DD8"}}>
                    </div>
                }
            </>
        )
    }

}