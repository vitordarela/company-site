import React from 'react'
import FeaturesSelected from './FeaturesSelected'
import FeaturesList from './FeaturesList'
import { SectionSplitProps } from '../../../utils/SectionProps'
import { ListDataProps, SectionHeaderProps } from '../../../utils/ServiceData'

interface FeaturesProps extends SectionSplitProps {
  sectionHeader?: SectionHeaderProps
  dataFiltered?: ListDataProps | undefined
  data?: ListDataProps[]
}

const Features = ({ data, dataFiltered, sectionHeader }: FeaturesProps) => {
  return dataFiltered ? (
    <FeaturesSelected data={dataFiltered} topDivider />
  ) : (
    <FeaturesList data={data} sectionHeader={sectionHeader} topDivider />
  )
}

export default Features
