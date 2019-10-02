import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { inputPlaceholder } from "../Utils/Colors";
const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Add A New Todo"
    placeholderTextColor={inputPlaceholder}
    multiline={true}
    autoCapitalize="sentences"
    underlineColorAndroid="transparent"
    selectionColor={"white"}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}

    // value: the value of the text input. By default, it will be an empty string since we are using the local state to set it. As the state updates, the value of the text input updates.
    // onChangeText: is a callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.
    // placeholder: just like in HTML, placeholder is to define a default message in the input field indicating as if what is expected.
    // placeholderTextColor: the custom text color of the placeholder string.
    // returnKeyType: determines how the return key on the device's keyboard should look. You can find more values or platform specific values here. Some of the values are specific to each platform.
    // autoCorrect: this prop let us decide whether to show the autocorrect bar along with keyboard or not. In our case, we have set it to false.
    // multiline: if true, the text input can be multiple lines. Like we have set in above.
    // maxlength: helps you define the maximum number of characters that you can allow for the user to enter.
    // autoCapitalize: to automatically capitalize certain characters. We are passing sentences as the default value. This means, every new sentence will automatically have its first character capitalized.
    // underlineColorAndroid: works only with android. It prompts sets a bottom border or an underline.
    // blurOnSubmit: In case of multiline TextInput field, this behaves as when pressing return key, it will blur the field and trigger the onSubmitEditing event instead of inserting a newline into the field.
    // onSubmitEditing: contains the business the logic in form of a callback as to what to do when the return key or input's submit button is pressed. We will be defining this callback in Main.js
  />
);

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: "white",
    fontWeight: "500"
  }
});

export default Input;
