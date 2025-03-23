"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { LogOut, Copy, ExternalLink } from "lucide-react"

const WalletConnect = () => {
  const [walletAddress, setWalletAddress] = useState(null)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)
  const dropdownRef = useRef(null)

  // Check if MetaMask is connected when the component mounts
  useEffect(() => {
    if (window.ethereum) {
      // Check if already connected wallet is available
      const checkWalletConnection = async () => {
        const accounts = await window.ethereum.request({ method: "eth_accounts" })
        if (accounts.length > 0) {
          setWalletAddress(accounts[0])
          setIsWalletConnected(true)
        }
      }
      checkWalletConnection()

      // Listen for account changes
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          // User disconnected their wallet
          disconnectWallet()
        } else {
          setWalletAddress(accounts[0])
          setIsWalletConnected(true)
        }
      }

      window.ethereum.on("accountsChanged", handleAccountsChanged)

      // Cleanup listener
      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
      }
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle Wallet Connection (MetaMask)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
        setWalletAddress(accounts[0])
        setIsWalletConnected(true)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      alert("Please install MetaMask!")
    }
  }

  // Handle Wallet Disconnect
  const disconnectWallet = () => {
    setWalletAddress(null)
    setIsWalletConnected(false)
    setIsDropdownOpen(false)
  }

  // Copy wallet address
  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
    setCopySuccess(true)
    setTimeout(() => setCopySuccess(false), 2000)
  }

  // Open etherscan to view the address
  const openEtherscan = () => {
    window.open(`https://etherscan.io/address/${walletAddress}`, '_blank')
  }

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {isWalletConnected ? (
        <>
          <Button 
            variant="outline" 
            className="text-white bg-violet-700 hover:bg-violet-800" 
            onClick={toggleDropdown}
          >
            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
          </Button>
          
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-72 bg-zinc-900 border border-violet-500/30 rounded-md shadow-lg z-50">
              <div className="p-4">
                <div className="mb-3">
                  <p className="text-sm text-gray-400 mb-1">Connected Wallet</p>
                  <div className="bg-zinc-800 p-2 rounded flex items-center justify-between">
                    <p className="text-white text-sm font-mono">{walletAddress}</p>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 text-gray-400 hover:text-white" 
                      onClick={copyToClipboard}
                    >
                      <Copy size={16} />
                    </Button>
                  </div>
                  {copySuccess && (
                    <p className="text-xs text-green-500 mt-1">Address copied to clipboard!</p>
                  )}
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start text-gray-300 hover:text-white border-zinc-700" 
                    onClick={openEtherscan}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View on Etherscan
                  </Button>
                  
                  <Button 
                    variant="destructive" 
                    size="sm" 
                    className="w-full justify-start" 
                    onClick={disconnectWallet}
                  >
                    <LogOut size={16} className="mr-2" />
                    Disconnect Wallet
                  </Button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Button className="bg-violet-700 hover:bg-violet-800 text-white" onClick={connectWallet}>
          Connect Wallet
        </Button>
      )}
    </div>
  )
}

export default WalletConnect