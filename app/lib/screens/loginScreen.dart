import 'dart:convert';

import 'package:fitness_app/screens/dashboardScreen.dart';
import 'package:fitness_app/screens/registerScreen.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:toast/toast.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  State<LoginScreen> createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final _formKey = GlobalKey<FormState>();
  String _email = '', _password = '';
  bool _passwordVisible = false;
  TextEditingController email = TextEditingController();
  TextEditingController password = TextEditingController();

  Future<void> login(TextEditingController email, TextEditingController password) async {
  try {
    String uri = 'http://192.168.8.101/fitness/fitness/admin/login.php';
    var res = await http.post(Uri.parse(uri), body: {
      "email": email.text,
      "password": password.text,
    });

    if (res.statusCode == 200) {
      final responseData = json.decode(res.body);

      if (responseData['success']) {
        final String name = responseData['name'];
        final String email = responseData['email'];
        Toast.show("Login successful",
            duration: Toast.lengthShort, gravity: Toast.bottom);
        Navigator.push(
            context,
            MaterialPageRoute(
                builder: (context) =>
                    DashboardScreen(name: name, email: email)));
      } else {
        final String errorMessage = responseData['message'];
        Toast.show(errorMessage,
            duration: Toast.lengthShort, gravity: Toast.bottom);
      }
    } else {
      Toast.show("Server error: ${res.statusCode}",
          duration: Toast.lengthShort, gravity: Toast.bottom);
    }
  } catch (e) {
    print(e);
    Toast.show("An error occurred, please try again later",
        duration: Toast.lengthShort, gravity: Toast.bottom);
  }
}


  @override
  Widget build(BuildContext context) {
    ToastContext().init(context);
    return Scaffold(
        backgroundColor: Colors.grey,
        appBar: AppBar(
          title: const Text("Login"),
          backgroundColor: Colors.grey[300],
        ),
        body: SingleChildScrollView(
          child: Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height,
              padding: const EdgeInsets.fromLTRB(20, 0, 20, 100),
              child: Form(
                key: _formKey,
                autovalidateMode: AutovalidateMode.onUserInteraction,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // App logo
                    Image.asset(
                      'assets/icons/app_logo.png', // Make sure the logo is placed in your assets folder
                      width: 150, // Adjust the width as needed
                      height: 150, // Adjust the height as needed
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    Container(
                      width: MediaQuery.of(context).size.width * 0.8,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10.0),
                        color: Colors.grey[200],
                      ),
                      child: TextFormField(
                        controller: email,
                        decoration: const InputDecoration(
                          labelText: 'Email',
                          contentPadding:
                              EdgeInsets.symmetric(horizontal: 20.0),
                          border: InputBorder.none,
                          prefixIcon: Icon(Icons.email),
                        ),
                        validator: (value) {
                          if (value == null || value.trim().isEmpty) {
                            return 'Please Enter an email';
                          } else if (!value.contains('@')) {
                            return 'Please enter a valid email address';
                          }
                          return null;
                        },
                        onSaved: (value) => _email = value.toString(),
                      ),
                    ),
                    const SizedBox(
                      height: 10,
                    ),
                    Container(
                      width: MediaQuery.of(context).size.width * 0.8,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(10.0),
                        color: Colors.grey[200],
                      ),
                      child: TextFormField(
                        controller: password,
                        decoration: InputDecoration(
                          labelText: 'Password',
                          contentPadding:
                              const EdgeInsets.symmetric(horizontal: 20.0),
                          border: InputBorder.none,
                          prefixIcon: const Icon(Icons.lock),
                          suffixIcon: IconButton(
                            icon: Icon(_passwordVisible
                                ? Icons.visibility
                                : Icons.visibility_off),
                            onPressed: () {
                              print('pressed');
                              setState(() {
                                _passwordVisible = !_passwordVisible;
                              });
                            },
                          ),
                        ),

                        //hide the text
                        obscureText: !_passwordVisible,

                        validator: (value) {
                          if (value == null || value.trim().isEmpty) {
                            return 'Please Enter a password';
                          } else if (value.length < 6) {
                            return 'Password must be at least 6 chara  ';
                          }
                          return null;
                        },
                      ),
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    ElevatedButton(
                        onPressed: () {
                          if (_formKey.currentState!.validate()) {
                            _formKey.currentState!.save();
                          }
                          login(email, password);
                        },
                        child: const Text(
                          'Login',
                          style: TextStyle(color: Colors.black54),
                        )),
                    const SizedBox(
                      height: 20,
                    ),
                    TextButton(
                        onPressed: () {
                          Navigator.push(
                              context,
                              MaterialPageRoute(
                                  builder: (context) =>
                                      const Registerscreen()));
                        },
                        child: const Text(
                          'Not Registered? Register',
                          style: TextStyle(fontSize: 20, color: Colors.black54),
                        ))
                  ],
                ),
              )),
        ));
  }
}
