<template lang='pug'>
  .fact
    img(:src='fact.icon')
    component(:is='fact.type' :fact='fact')

</template>

<script>
import AttributeAdjust from '@/components/facts/AttributeAdjust.vue'
import Buff from '@/components/facts/Buff.vue'
import BuffConversion from '@/components/facts/BuffConversion.vue'
import ComboField from '@/components/facts/ComboField.vue'
import ComboFinisher from '@/components/facts/ComboFinisher.vue'
import Damage from '@/components/facts/Damage.vue'
import Duration from '@/components/facts/Duration.vue'
import Distance from '@/components/facts/Distance.vue'
import Number from '@/components/facts/Number.vue'
import NoData from '@/components/facts/NoData.vue'
import Percent from '@/components/facts/Percent.vue'
import PrefixedBuff from '@/components/facts/PrefixedBuff.vue'
import Radius from '@/components/facts/Radius.vue'
import Range from '@/components/facts/Range.vue'
import Time from '@/components/facts/Time.vue'
import Unblockable from '@/components/facts/Unblockable.vue'

export default {
  name: 'Fact',
  props: ['fact'],
  components: {
    AttributeAdjust,
    Buff,
    BuffConversion,
    ComboField,
    ComboFinisher,
    Damage,
    Duration,
    Distance,
    Number,
    NoData,
    Percent,
    PrefixedBuff,
    Radius,
    Range,
    Time,
    Unblockable,
  },
}
</script>

<style lang='scss' scoped>

.fact {
  display: flex;
  flex-direction: row;
  align-items: center;
}

img {
  width: 32px;
  height: 32px;
}
</style>
