import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styleGobal } from '@/styles'
import { HeaderComponent } from '@/components'
interface PackageDetailProps {
    id: string,
    status: number,
    weight: any,
    fromOffice: any,
    toOffice: any,
    price: number,
    quantity: number,
    note?: string,
    imageUrl: any,
    createTime: any
}
const PackageDetailScreen: React.FC  = () => {
  return (
    <SafeAreaView style={styleGobal.androidSafeArea}>
        <HeaderComponent headerTitle='111'/>

    </SafeAreaView>
  )
}

export default PackageDetailScreen

const styles = StyleSheet.create({})