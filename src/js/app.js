App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load pets.
    $.getJSON('../pets.json', function(data) {
      var petsRow = $('#petsRow');
      var petTemplate = $('#petTemplate');

      for (i = 0; i < data.length; i ++) {
        petTemplate.find('.panel-title').text(data[i].name);
        petTemplate.find('img').attr('src', data[i].picture);
        petTemplate.find('.pet-breed').text(data[i].breed);
        petTemplate.find('.pet-age').text(data[i].age);
        petTemplate.find('.pet-location').text(data[i].location);
        petTemplate.find('.btn-adopt').attr('data-id', data[i].id);

        petsRow.append(petTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  
  initWeb3: async function() {
    if (typeof Web3 !== 'undefined') {
      web3 = new Web3(App.web3Provider);
    } else {
      console.log("Web3 is not available. Make sure you have MetaMask installed.");
    }
    
    if(window.ethereum){
      App.web3Provider=window.ethereum;
      try{
        await window.ethereum.request({method: "eth_requestAccounts"});
      }
      catch(error){
        console.log("User denied account access");
      }
    }
    else if(window.web3){
        App.web3Provider=window.web3.currentProvider;
    }
    else{
      App.web3Provider=new Web3.providers.HttpProvider("http://localhost:7545");
    }

    web3=new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {
   $.getJSON("Adoption.json",function(data){
    var AdoptionArtifact=data;
    App.contracts.Adoption=TruffleContract(AdoptionArtifact);
    App.contracts.Adoption.setProvider(App.web3Provider);
    return App.markAdopted();
   });

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },

  markAdopted: function() {
   var adoptionInsurance;
   App.contracts.Adoption.deployed().then(function(instance){
    adoptionInsurance = insurance;
    return adoptionInsurance.getAdopters.call();
   }).then(function(adopters){
    for(i=0;i<adopters.length;i++){
      if(adopters[i]!="0x0x0000000000000000000000000000000000000000"){
        $('.panel-pet').eq(i).find('button').text('success').attr('disabled',true);
      }
    }
   }).catch(function(arr){
    console.log(err.messsage);
   })
  },

  handleAdopt: function(event) {
    event.preventDefault();

    var petId = parseInt($(event.target).data('id'));

    web3.eth.getAccounts(function(error,accounts){
      if(error){
        console.log(error);
      }

      var account=accounts[0];
      App.contracts.Adoption.deployed().then(function(instance){
        adoptionInsurance=instance;
        return adoptionInsurance.adopt(petId,{from:account});
      }).then(function(result){
         App.markAdopted();
         alert("Adoption Successful!")
      }).catch(function(err){
        console.log(err.messsage);
      });
    });
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
