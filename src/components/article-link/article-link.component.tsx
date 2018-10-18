import * as React from 'react';

class ArticleLinkComponent extends React.Component<any> {
    render() {
        return (
            <a href={this.props.url} target='_blank'>{this.props.children}</a>
        );
    }
}

export default ArticleLinkComponent;