import { connect } from 'react-redux';
import MenuScreen from './MenuScreen';

const mapStateToProps = (state) => {
  return {
    selectedProducts: state.selectedProducts, // Redux store'dan seçili ürünleri al
  };
};

export default connect(mapStateToProps)(MenuScreen);