import React from 'react'
import FeaturesSelected from './FeaturesSelected'
import FeaturesList from './FeaturesList'
import { SectionSplitProps } from '../../../../utils/SectionProps'
import { ListDataProps, SectionHeaderProps } from '../../../../utils/ServiceData'

interface FeaturesProps extends SectionSplitProps {
  sectionHeader?: SectionHeaderProps
  dataFiltered?: ListDataProps | undefined
  data?: ListDataProps[],
  dictionary?: any
}

const   Features = ({ data, dataFiltered, sectionHeader, dictionary }: FeaturesProps) => {
  return dataFiltered ? (
    <FeaturesSelected dictionary={dictionary} data={dataFiltered} topDivider />
  ) : (
    <FeaturesList data={data} sectionHeader={sectionHeader} topDivider />
  )
}

export default Features
