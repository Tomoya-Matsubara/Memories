# Error and Solution

## 
### Error
~~~JavaScript
- Diff: /Podfile.lock: No such file or directory
- Diff: /Manifest.lock: No such file or directory
- The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.
~~~

### Solution
- `sudo gem update --system`
- `sudo gem install -n /usr/local/bin cocoapods`
- `pod setup`

After solving the first error, Build succeeds.

##
### Error
~~~JavaScript
Thread 10: EXC_BAD_ACCESS (code=2, address=0x12a7f4070)
~~~

### Solution
In `ViroSample/node_modules/react-native/Libraries/fishhook/fishhook.c`, 

- <strong>Remove</strong> the line 106: 
~~~JavaScript
indirect_symbol_bindings[i] = cur->rebindings[j].replacement;
~~~

- <strong>Add</strong> the following codes
~~~JavaScript
if (i < (sizeof(indirect_symbol_bindings) / sizeof(indirect_symbol_bindings[0]))) {
    indirect_symbol_bindings[i] = cur->rebindings[j].replacement;
}
~~~

## 
### Error
~~~JavaScript
Unknown argument type `__attribute__` in method - [RCTAppState getChurrentAppState:error:]. Extend RCTConvert to support this type. 
~~~

### Solution
- Update react-native to the version later than 0.59.9: `npx react-native upgrade 0.59.9`

## 
### Error
~~~JavaScript
The given API Key is either missing or invalid! If you have not signed up for accessing Viro Media platform, please do so at www.viromedia.com. Otherwise, contact info@viromedia.com if you have a valid key and are encountering this error.
~~~

### Solution
- <strong>Edit</strong> `code-samples/package.json`: `"react-native: "2.16.0"` -> `"react-native: "2.17.0"`
- Then execute `npm install`