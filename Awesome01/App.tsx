import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import BlogCard from './components/BlogCard';
import ContactList from './components/ContactList';
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <BlogCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
