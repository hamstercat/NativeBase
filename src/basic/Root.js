import React, { Component } from "react";
import { View, ViewPropTypes } from "react-native";

import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";
import { ToastContainer as Toast } from "./ToastContainer";
import { ActionSheetContainer as ActionSheet } from "./Actionsheet";
import { Text } from "./Text";

class Root extends Component {
  render() {
    return (
      <View ref={c => (this._root = c)} {...this.props} style={{ flex: 1 }}>
        {this.props.children}
        <Toast
          ref={c => {
            if (!Toast.toastInstance) Toast.toastInstance = c;
          }}
        />
        <ActionSheet
          ref={c => {
            if (!ActionSheet.actionsheetInstance)
              ActionSheet.actionsheetInstance = c;
          }}
        />
      </View>
    );
  }
}

Root.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object
};

const StyledRoot = connectStyle("NativeBase.Root", {}, mapPropsToStyleNames)(
  Root
);

export { StyledRoot as Root };
