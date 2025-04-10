import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/ThemeContext';
import { Card } from '../../components/Card';

const SCREEN_WIDTH = Dimensions.get('window').width;
const LARGE_IMAGE_SIZE = SCREEN_WIDTH - 32;
const SMALL_IMAGE_SIZE = LARGE_IMAGE_SIZE / 6; // 5x6 grid for 30 images

interface PictureChain {
  id: string;
  title: string;
  description: string;
  contributingImages: {
    id: string;
    url: string;
    contributor: string;
  }[];
  totalContributions: number;
}

// Generate 30 demo images for each chain
const generateDemoImages = (baseId: string) => {
  return Array.from({ length: 30 }, (_, i) => ({
    id: `${baseId}-${i + 1}`,
    url: `https://picsum.photos/200/200?random=${baseId}-${i + 1}`,
    contributor: `user${i + 1}.eth`,
  }));
};

const demoChains: PictureChain[] = [
  {
    id: '1',
    title: 'Web3 Community Mosaic',
    description: 'A collaborative mosaic representing our Web3 community journey. Each piece tells a unique story of innovation and creativity.',
    contributingImages: generateDemoImages('web3'),
    totalContributions: 30,
  },
  {
    id: '2',
    title: 'DeFi Evolution',
    description: 'The evolution of decentralized finance captured through community contributions. A visual journey through DeFi innovations.',
    contributingImages: generateDemoImages('defi'),
    totalContributions: 30,
  },
  {
    id: '3',
    title: 'NFT Artists United',
    description: 'A collective showcase of NFT artists coming together to create something bigger than themselves.',
    contributingImages: generateDemoImages('nft'),
    totalContributions: 30,
  },
];

export const PictureScreen = () => {
  const theme = useTheme();

  const renderMosaic = (images: PictureChain['contributingImages']) => {
    return (
      <View style={styles.mosaicContainer}>
        {images.map((img, index) => (
          <TouchableOpacity 
            key={img.id}
            style={styles.mosaicImage}
            onPress={() => console.log(`Image ${index + 1} pressed`)}
          >
            <Image
              source={{ uri: img.url }}
              style={styles.smallImage}
              resizeMode="cover"
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderPictureChain = (chain: PictureChain) => {
    return (
      <Card key={chain.id} style={styles.chainCard}>
        <Text style={[styles.chainTitle, { color: theme.colors.text.primary }]}>
          {chain.title}
        </Text>
        
        <View style={styles.mainImageContainer}>
          {renderMosaic(chain.contributingImages)}
        </View>

        <Text style={[styles.description, { color: theme.colors.text.secondary }]}>
          {chain.description}
        </Text>

        <View style={styles.statsContainer}>
          <Text style={[styles.stats, { color: theme.colors.text.secondary }]}>
            {chain.totalContributions} contributions
          </Text>
        </View>
      </Card>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {demoChains.map(renderPictureChain)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  chainCard: {
    marginBottom: 24,
  },
  chainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  mainImageContainer: {
    width: LARGE_IMAGE_SIZE,
    aspectRatio: 1,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  mosaicContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mosaicImage: {
    width: SMALL_IMAGE_SIZE,
    height: SMALL_IMAGE_SIZE,
  },
  smallImage: {
    width: '100%',
    height: '100%',
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    lineHeight: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  stats: {
    fontSize: 14,
    fontWeight: '500',
  },
}); 