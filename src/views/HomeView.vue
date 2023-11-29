<template>
  <div class="container">
    <VoteYearTab />
    <div class="bg-white rounded-lg w-[270px] h-[619px] p-5">
      <h3 class="font-semibold text-lg">投票概況</h3>
      <VoteInfoChart />
      <VotePartyChart/>
    </div>
  </div>
</template>

<script setup>
import VoteYearTab from '@/components/vote/VoteYearTab.vue';
import VoteInfoChart from '@/components/vote/VoteInfoChart.vue';
import VotePartyChart from '@/components/vote/VotePartyChart.vue';

</script>