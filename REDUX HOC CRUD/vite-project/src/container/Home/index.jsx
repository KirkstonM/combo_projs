import {connect} from "react-redux";
import { compose } from "redux";

export const HomeHOC = (WrappedComponent) => {
    const hocComponent = ({ ...props }) => {
        return (<WrappedComponent {...props} />)
    }
    hocComponent.propTypes = {}
    return hocComponent
}
const mapStateToProps = state => ({
    count : state.counter,
    theme : state.theme
});

export const mapDispatchToProps = dispatch => ({});

export default Comp => compose(connect( mapStateToProps, mapDispatchToProps)(HomeHOC(Comp)));
