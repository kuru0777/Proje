import React from "react"
import { TextInput, View } from 'react-native'
import styles from "./SearchBar.style"

const SearchBar = ({ setText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholderTextColor="black"
                placeholder="Ara..."
                style={styles.searchTitle}
                onChangeText={setText}
            />
        </View>
    )
}
export default SearchBar;