import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { Card } from './Card';
import { Ionicons } from '@expo/vector-icons';
import { SocialChain as SocialChainType, SocialChainPost } from '../types/social';
import { useTheme } from '../theme/ThemeContext';

interface SocialChainListProps {
  chain: SocialChainType;
  onPostPress?: (post: SocialChainPost) => void;
}

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};

export const SocialChainList: React.FC<SocialChainListProps> = ({ chain, onPostPress }) => {
  const theme = useTheme();
  const totalEngagement = chain.posts.reduce((sum, post) => {
    return sum + post.likes + post.comments + post.reposts;
  }, 0);

  return (
    <Card style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.colors.text.primary }]}>{chain.title}</Text>
          <Text style={[styles.description, { color: theme.colors.text.secondary }]}>{chain.description}</Text>
          <Text style={[styles.date, { color: theme.colors.text.secondary }]}>
            Started {formatDate(chain.startDate)}
          </Text>
        </View>
      </View>

      <View style={styles.postsContainer}>
        {chain.posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={[styles.post, { borderBottomColor: theme.colors.border }]}
            onPress={() => onPostPress?.(post)}
          >
            <View style={styles.postContent}>
              <Text style={[styles.postText, { color: theme.colors.text.primary }]}>{post.content}</Text>
              <Text style={[styles.postDate, { color: theme.colors.text.secondary }]}>
                {formatDate(post.timestamp)}
              </Text>
            </View>
            <View style={styles.postStats}>
              <View style={styles.statItem}>
                <Ionicons name="heart" size={16} color={theme.colors.text.secondary} />
                <Text style={[styles.statText, { color: theme.colors.text.secondary }]}>{post.likes}</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="chatbubble" size={16} color={theme.colors.text.secondary} />
                <Text style={[styles.statText, { color: theme.colors.text.secondary }]}>{post.comments}</Text>
              </View>
              <View style={styles.statItem}>
                <Ionicons name="repeat" size={16} color={theme.colors.text.secondary} />
                <Text style={[styles.statText, { color: theme.colors.text.secondary }]}>{post.reposts}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.footer, { borderTopColor: theme.colors.border }]}>
        <Text style={[styles.footerText, { color: theme.colors.text.secondary }]}>
          {chain.posts.length} moments • {totalEngagement} total engagements
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  } as ViewStyle,
  titleContainer: {
    flex: 1,
  } as ViewStyle,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  } as TextStyle,
  description: {
    fontSize: 16,
    marginBottom: 4,
  } as TextStyle,
  date: {
    fontSize: 14,
  } as TextStyle,
  postsContainer: {
    marginTop: 16,
  } as ViewStyle,
  post: {
    padding: 16,
    borderBottomWidth: 1,
  } as ViewStyle,
  postContent: {
    marginBottom: 8,
  } as ViewStyle,
  postText: {
    fontSize: 16,
    marginBottom: 4,
  } as TextStyle,
  postDate: {
    fontSize: 14,
  } as TextStyle,
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  } as ViewStyle,
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  } as ViewStyle,
  statText: {
    fontSize: 14,
  } as TextStyle,
  footer: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
  } as ViewStyle,
  footerText: {
    fontSize: 14,
    textAlign: 'center',
  } as TextStyle,
}); 