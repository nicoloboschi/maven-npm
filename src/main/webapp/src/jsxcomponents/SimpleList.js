const React = require('react');

class SimpleList extends React.Component {
    render() {


        const domelements = this.props.elements.map(function (el) {
            const key = Object.keys(el)[0];
            const val = Object.values(el)[0];
            return (<tr key={key}>
                <td>{key}</td>
                <td>{val}</td>
            </tr>);
        });
        return (
                <div>
                    <h1>Simple list of {domelements.length}</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Number</th>
                                <th>Things</th>
                            </tr>
                        </thead>
                        <tbody>
                            {domelements}
                        </tbody>
                    </table>
                </div>
                );
    }
}
;
module.exports = SimpleList;


