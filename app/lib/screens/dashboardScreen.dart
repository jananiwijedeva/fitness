import 'dart:convert';

import 'package:fitness_app/screens/detailedCardScreen.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class DashboardScreen extends StatefulWidget {
  final String name, email;
  const DashboardScreen({super.key, required this.name, required this.email});

  @override
  State<DashboardScreen> createState() => _DashboardScreenState();
}

class _DashboardScreenState extends State<DashboardScreen> {
  List<dynamic> exercises = [];
  String baseUrl = 'http://192.168.8.100/fitness/fitness/admin/';

  Future<void> _fetchExercises() async {
    try {
      final apiUrl = '$baseUrl/exercise.php';
      final response = await http.get(Uri.parse(apiUrl));

      if (response.statusCode == 200) {
        setState(() {
          exercises = json.decode(response.body);
        });
      } else {
        print('Error: ${response.statusCode}');
        throw Exception('Failed to fetch exercises');
      }
    } catch (e) {
      print('Error fetching exercises: $e');
    }
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    _fetchExercises();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text("Dashboard"),
          actions: [
            IconButton(
                onPressed: () {
                  Navigator.pop(context);
                },
                icon: const Icon(Icons.logout))
          ],
        ),
        body: exercises.isEmpty
            ? const Center(
                child: CircularProgressIndicator(),
              )
            : Column(children: [
                const SizedBox(
                  height: 20,
                ),
                Text("Welcome,  ${widget.name}",
                    style: const TextStyle(
                        fontWeight: FontWeight.bold, fontSize: 16)),
                const SizedBox(
                  height: 10,
                ),
                const Text(
                  "Exercise List",
                  style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
                ),
                Expanded(
                  child: ListView.builder(
                    itemCount: exercises.length,
                    itemBuilder: (context, index) {
                      final exercise = exercises[index];
                      final imageUrl = '$baseUrl${exercise['image_url']}';
                      return Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: GestureDetector(
                            onTap: () {
                              Navigator.push(
                                  context,
                                  MaterialPageRoute(
                                      builder: (context) => DetailedCardScreen(
                                            imageUrl: imageUrl,
                                            name: exercise['name'],
                                            slogan: exercise['slogan'],
                                            second: int.parse(exercise['second']),
                                            userName: widget.name,
                                            userEmail: widget.email,
                                          )));
                            },
                            child: Card(
                              child: ListTile(
                                leading: CircleAvatar(
                                  radius: 30,
                                  backgroundImage: NetworkImage(imageUrl),
                                ),
                                title: Text(exercise['name']),
                                subtitle: Text(exercise['slogan']),
                                trailing: Text("${exercise['second']}s"),
                              ),
                            ),
                          ));
                    },
                  ),
                )
              ]));
  }
}
