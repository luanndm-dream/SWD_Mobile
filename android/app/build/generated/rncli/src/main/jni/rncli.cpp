/**
 * This code was generated by [React Native CLI](https://www.npmjs.com/package/@react-native-community/cli).
 *
 * Do not edit this file as changes may cause incorrect behavior and will be lost
 * once the code is regenerated.
 *
 */

#include "rncli.h"
#include <rnasyncstorage.h>
#include <rngesturehandler_codegen.h>
#include <react/renderer/components/rngesturehandler_codegen/ComponentDescriptors.h>
#include <RNImagePickerSpec.h>
#include <RNCViewPager.h>
#include <react/renderer/components/RNCViewPager/ComponentDescriptors.h>
#include <safeareacontext.h>
#include <react/renderer/components/safeareacontext/ComponentDescriptors.h>
#include <rnscreens.h>
#include <react/renderer/components/rnscreens/ComponentDescriptors.h>
#include <rnsvg.h>
#include <react/renderer/components/rnsvg/ComponentDescriptors.h>
#include <RNVectorIconsSpec.h>

namespace facebook {
namespace react {

std::shared_ptr<TurboModule> rncli_ModuleProvider(const std::string moduleName, const JavaTurboModule::InitParams &params) {
  auto module_rnasyncstorage = rnasyncstorage_ModuleProvider(moduleName, params);
  if (module_rnasyncstorage != nullptr) {
    return module_rnasyncstorage;
  }
  auto module_rngesturehandler_codegen = rngesturehandler_codegen_ModuleProvider(moduleName, params);
  if (module_rngesturehandler_codegen != nullptr) {
    return module_rngesturehandler_codegen;
  }
  auto module_RNImagePickerSpec = RNImagePickerSpec_ModuleProvider(moduleName, params);
  if (module_RNImagePickerSpec != nullptr) {
    return module_RNImagePickerSpec;
  }
  auto module_RNCViewPager = RNCViewPager_ModuleProvider(moduleName, params);
  if (module_RNCViewPager != nullptr) {
    return module_RNCViewPager;
  }
  auto module_safeareacontext = safeareacontext_ModuleProvider(moduleName, params);
  if (module_safeareacontext != nullptr) {
    return module_safeareacontext;
  }
  auto module_rnscreens = rnscreens_ModuleProvider(moduleName, params);
  if (module_rnscreens != nullptr) {
    return module_rnscreens;
  }
  auto module_rnsvg = rnsvg_ModuleProvider(moduleName, params);
  if (module_rnsvg != nullptr) {
    return module_rnsvg;
  }
  auto module_RNVectorIconsSpec = RNVectorIconsSpec_ModuleProvider(moduleName, params);
  if (module_RNVectorIconsSpec != nullptr) {
    return module_RNVectorIconsSpec;
  }
  return nullptr;
}

void rncli_registerProviders(std::shared_ptr<ComponentDescriptorProviderRegistry const> providerRegistry) {




  providerRegistry->add(concreteComponentDescriptorProvider<RNGestureHandlerButtonComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNGestureHandlerRootViewComponentDescriptor>());


  providerRegistry->add(concreteComponentDescriptorProvider<RNCViewPagerComponentDescriptor>());

  providerRegistry->add(concreteComponentDescriptorProvider<RNCSafeAreaProviderComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNCSafeAreaViewComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSFullWindowOverlayComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenContainerComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenNavigationContainerComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenStackHeaderConfigComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenStackHeaderSubviewComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenStackComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSSearchBarComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSScreenComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGCircleComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGClipPathComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGDefsComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGEllipseComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGForeignObjectComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGGroupComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGImageComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGLinearGradientComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGLineComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGMarkerComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGMaskComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGPathComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGPatternComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGRadialGradientComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGRectComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGSvgViewAndroidComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGSymbolComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGTextComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGTextPathComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGTSpanComponentDescriptor>());
  providerRegistry->add(concreteComponentDescriptorProvider<RNSVGUseComponentDescriptor>());

  return;
}

} // namespace react
} // namespace facebook
