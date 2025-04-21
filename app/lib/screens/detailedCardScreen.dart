import 'dart:async';

import 'package:flutter/material.dart';

class DetailedCardScreen extends StatefulWidget {
  final String imageUrl;
  final String name;
  final String slogan;
  final int second;

  final String userName;
  final String userEmail;

  const DetailedCardScreen({super.key, 
    required this.imageUrl,
    required this.name,
    required this.slogan,
    required this.second,
    required this.userName,
    required this.userEmail,
  });

  @override
  State<DetailedCardScreen> createState() => _DetailedCardScreenState();
}

class _DetailedCardScreenState extends State<DetailedCardScreen> {
  late int _secondsRemaining;
  late bool _isCounting;
  late bool _exerciseCompleted;

  @override
  void initState() {
    super.initState();
    _secondsRemaining = widget.second;
    _isCounting = false;
    _exerciseCompleted = false;
  }

  void _startCounting() {
    setState(() {
      _isCounting = true;
    });

    const oneSec = Duration(seconds: 1);

    Timer.periodic(oneSec, (timer) {
      setState(() {
        if (_secondsRemaining == 0) {
          _isCounting = false;
          _exerciseCompleted = true;
          timer.cancel();
        } else {
          _secondsRemaining--;
        }
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("ExerciseDetails"),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SizedBox(height: 20),
          Padding(
            padding:const EdgeInsets.all(16.0),
            child: Column(
              children: [
                Text("Welcome,  ${widget.userName}"),
                const SizedBox(height: 10),
                const Text("Let's Get Started", style: TextStyle(fontWeight: FontWeight.bold, fontSize: 14)),
              ],
            ),
          
          ),
          
          Expanded(
              child: Padding(
            padding: const EdgeInsets.all(16.0),
            child: Image.network(widget.imageUrl),
          )),
          Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Text(
                    widget.name,
                    style: const TextStyle(
                        fontSize: 24, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    widget.slogan,
                    style: const TextStyle(fontSize: 18),
                  ),
                  const SizedBox(height: 16),
                  _isCounting
                      ? Column(
                          children: [
                            CircularProgressIndicator(
                              value: (_secondsRemaining / widget.second),
                              strokeWidth: 10,
                              backgroundColor: Colors.grey,
                              valueColor:
                                  const AlwaysStoppedAnimation(Colors.blue),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Text(
                              '$_secondsRemaining seconds',
                              style: const TextStyle(fontSize: 24),
                            ),
                          ],
                        )
                      : const SizedBox(
                          height: 16.0,
                        ),
                  _exerciseCompleted
                      ? const Column(
                          children: [
                            
                            Text(
                              'Exercise Completed',
                              style: TextStyle(fontSize: 16),
                            ),
                          ],
                        )
                      : ElevatedButton(
                          onPressed: () {
                            _startCounting();
                          },
                          child: Text(
                            _isCounting ? 'Counting down...' : 'Start Counting',
                          )
                        )
                ],
              )),
        ],
      ),
    );
  }
}
